export const motion = {
  duration: {
    short1: "50ms",
    short2: "100ms",
    short3: "150ms",
    short4: "200ms",
    medium1: "250ms",
    medium2: "300ms",
    medium3: "350ms",
    medium4: "400ms",
    long1: "450ms",
    long2: "500ms",
    long3: "550ms",
    long4: "600ms",
    extraLong1: "700ms",
    extraLong2: "800ms",
    extraLong3: "900ms",
    extraLong4: "1000ms",
  },
  easing: {
    emphasized: {
      duration: "500ms",
      timingFunction: "ease",
    },
    emphasizedDecelerate: {
      duration: "400ms",
      timingFunction: "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
    },
    emphasizedAccelerate: {
      duration: "200ms",
      timingFunction: "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
    },
    standard: {
      duration: "300ms",
      timingFunction: "cubic-bezier(0.2, 0.0, 0, 1.0)",
    },
    standardDecelerate: {
      duration: "250ms",
      timingFunction: "cubic-bezier(0, 0, 0, 1)",
    },
    standardAccelerate: {
      duration: "200ms",
      timingFunction: "cubic-bezier(0.3, 0, 1, 1)",
    },
  },
};
