// AI Service Recommender for Inzozi Salon

class SalonAIRecommender {
    constructor() {
        // Service database with characteristics
        this.services = [
            {
                name: "Classic Haircut",
                tags: ["short hair", "men", "professional", "low maintenance"],
                suitableFor: ["office", "casual", "business"]
            },
            {
                name: "Fade Haircut",
                tags: ["short hair", "men", "trendy", "modern"],
                suitableFor: ["young", "casual", "street style"]
            },
            {
                name: "Updo Hairstyle",
                tags: ["long hair", "women", "elegant", "formal"],
                suitableFor: ["wedding", "party", "professional"]
            },
            {
                name: "Hair Coloring",
                tags: ["color", "transformation", "style change"],
                suitableFor: ["creative", "bold", "experimental"]
            },
            {
                name: "Beard Trim",
                tags: ["men", "grooming", "short hair"],
                suitableFor: ["professional", "clean"]
            }
        ];
    }

    // AI recommendation algorithm
    recommendServices(userProfile) {
        // Simple recommendation based on user characteristics
        return this.services.filter(service => 
            service.tags.some(tag => userProfile.tags.includes(tag)) ||
            service.suitableFor.some(context => userProfile.context.includes(context))
        );
    }

    // Interactive recommendation interface
    startRecommendation() {
        const questions = [
            "What's your hair length? (short/medium/long)",
            "What's your style preference? (professional/casual/trendy)",
            "What occasion are you preparing for? (work/party/everyday)"
        ];

        let userProfile = {
            tags: [],
            context: []
        };

        questions.forEach(question => {
            const answer = prompt(question).toLowerCase();
            
            switch(question) {
                case questions[0]:
                    userProfile.tags.push(answer + " hair");
                    break;
                case questions[1]:
                    userProfile.context.push(answer);
                    break;
                case questions[2]:
                    userProfile.context.push(answer);
                    break;
            }
        });

        const recommendations = this.recommendServices(userProfile);
        
        // Display recommendations
        const recommendationDiv = document.getElementById('ai-recommendations');
        recommendationDiv.innerHTML = `
            <h3>AI Recommended Services:</h3>
            <ul>
                ${recommendations.map(service => `<li>${service.name}</li>`).join('')}
            </ul>
        `;
    }
}

// Initialize AI Recommender
const salonAI = new SalonAIRecommender();

// Expose method to HTML button
function getAIRecommendation() {
    salonAI.startRecommendation();
}
