import soundNotification from "../../assets/notification/notificationSound2.mp3"
export function showNotification(shouldShowNotification: boolean) {
  if (!("Notification" in window)) {
    console.log("Browser does not support desktop notification");
    return;
  }

  if (shouldShowNotification) {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          const notificationSound = new Audio(soundNotification);
          notificationSound.play();

          new Notification("Hello World");
        }
      })
      .catch((error) => {
        console.error("Error displaying notification:", error);
      });
  }
}
