import Chart from 'chart.js/auto';

// Mock user activity data
const userData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: "User Activity",
        data: [45, 32, 56, 21, 78, 42],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
    }]
};

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("userActivityChart") as HTMLCanvasElement | null;

    if (!ctx) {
        throw new Error("Canvas element not found.");
    }

    const userActivityChart = new Chart(ctx, {
        type: "line",
        data: userData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
