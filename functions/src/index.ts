import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const dailyStats = functions.pubsub
  .schedule("0 0 * * *")
  .onRun(async () => {
    const db = admin.firestore();

    try {
      // Get counts
      const userSnapshot = await db.collection("User").get();
      const flightSnapshot = await db.collection("Flight").get();

      const userCount = userSnapshot.size;
      const flightCount = flightSnapshot.size;

      // Save to DailyStats collection
      await db.collection("DailyStats").add({
        date: admin.firestore.Timestamp.now(),
        userCount: userCount,
        flightCount: flightCount,
      });

      console.log("Daily stats updated");
    } catch (error) {
      console.error("Failed to update daily stats", error);
    }

    return null;
  });
