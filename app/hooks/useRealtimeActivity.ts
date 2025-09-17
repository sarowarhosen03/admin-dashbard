import { useCallback, useEffect, useState } from "react";

export interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  type: "post" | "comment" | "like" | "share" | "profile";
  avatar?: string;
}

const activityTypes: Array<{
  type: Activity["type"];
  actions: string[];
}> = [
  {
    type: "post",
    actions: ["created a new post", "published an article", "shared a story"],
  },
  {
    type: "comment",
    actions: ["commented on post", "replied to comment", "left a review"],
  },
  {
    type: "like",
    actions: ["liked a post", "loved a story", "reacted to comment"],
  },
  {
    type: "share",
    actions: ["shared a post", "retweeted content", "forwarded message"],
  },
  {
    type: "profile",
    actions: ["updated profile", "changed avatar", "edited bio"],
  },
];

const users = [
  "John Doe",
  "Sarah Wilson",
  "Mike Johnson",
  "Emma Davis",
  "Alex Brown",
  "Lisa Chen",
  "David Miller",
  "Anna Garcia",
  "Tom Wilson",
  "Kate Smith",
  "Ryan Lee",
  "Maria Rodriguez",
  "James Taylor",
  "Sophie Brown",
  "Chris Anderson",
];

export const useRealtimeActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [activeUsers, setActiveUsers] = useState(247);

  const generateActivity = (): Activity => {
    const user = users[Math.floor(Math.random() * users.length)];
    const activityType =
      activityTypes[Math.floor(Math.random() * activityTypes.length)];
    const action =
      activityType.actions[
        Math.floor(Math.random() * activityType.actions.length)
      ];

    return {
      id: Date.now().toString() + Math.random(),
      user,
      action,
      time: "just now",
      type: activityType.type,
    };
  };

  const updateTimes = () => {
    setActivities((prev) =>
      prev.map((activity) => {
        const timeDiff = Date.now() - parseInt(activity.id);
        const minutes = Math.floor(timeDiff / 60000);

        let timeStr = "just now";
        if (minutes > 0) {
          timeStr = minutes === 1 ? "1 min ago" : `${minutes} min ago`;
        }

        return { ...activity, time: timeStr };
      })
    );
  };

  const addActivity = useCallback(() => {
    const newActivity = generateActivity();
    setActivities((prev) => [newActivity, ...prev.slice(0, 4)]);
    setActiveUsers((prev) => prev + Math.floor(Math.random() * 3) - 1);
  }, []);

  useEffect(() => {
    // Initial activities
    const initialActivities = Array.from({ length: 5 }, () =>
      generateActivity()
    );
    setActivities(initialActivities);

    // Add new activity every 3-8 seconds
    const activityInterval = setInterval(
      addActivity,
      3000 + Math.random() * 5000
    );

    // Update times every minute
    const timeInterval = setInterval(updateTimes, 60000);

    return () => {
      clearInterval(activityInterval);
      clearInterval(timeInterval);
    };
  }, [addActivity]);

  return {
    activities,
    activeUsers,
  };
};
