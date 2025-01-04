// Enhanced Machine Learning Crop Disease Detection

class UbuhinziAI {
    constructor() {
        // Expanded Disease Database with More Detailed Information
        this.indwaraZibimera = [
            {
                izina: "Umuriro w'Ibigori (Wheat Rust)",
                ibimenyetso: [
                    "Amashami yera n'umuyonga",
                    "Ibihu byera cyangwa byirabura",
                    "Kubura imbaraga z'ibimera"
                ],
                inyungu: "Indwara itera kubura imbuto",
                uburyo: [
                    "Gukoresha imiti yo kurwanya umuriro",
                    "Gusiga ibimera byose",
                    "Gukoresha imbuto zitarwaye"
                ],
                ibyiciro: ["Ibigori", "Umusemburo"],
                ubunararibonye: 0.85  // Probability of detection accuracy
            },
            {
                izina: "Uburibwe bw'Imbuto (Fruit Blight)",
                ibimenyetso: [
                    "Amashami yera cyangwa yirabura",
                    "Kubura imbaraga",
                    "Gusaza kw'imbuto"
                ],
                inyungu: "Indwara itera kubura imbuto",
                uburyo: [
                    "Gukoresha imiti ya copper",
                    "Gukuraho ibimera byangijwe",
                    "Kubungabunga ubwiherero"
                ],
                ibyiciro: ["Imbuto", "Imboga"],
                ubunararibonye: 0.75
            },
            {
                izina: "Umusemburo w'Ibigori",
                ibimenyetso: ["amashami yera", "ibihu byera", "kubura imbaraga"],
                inyungu: "Gukoresha imiti yo kurwanya umusemburo",
                uburyo: ["Gusiga ibimera byose", "Gukoresha imiti ya mancozeb"],
                ibyiciro: ["Ibigori"],
                ubunararibonye: 0.8
            }
        ];

        // Machine Learning Simulation Features
        this.mlFeatures = {
            imageProcessing: true,
            multiClassDetection: true,
            accuracyThreshold: 0.7
        };

        // Inyungu z'Ubuhinzi (Crop Management Advice)
        this.inyunguZubuhinzi = [
            "Kubungabunga ibimera neza",
            "Gukoresha amazi make",
            "Kurinda ibimera mu gihe cy'izuba"
        ];

        // Ibiciro by'Imbuto (Market Prices)
        this.ibiciroByImbuto = [
            { 
                imbuto: "Ibigori", 
                igiciro: "RWF 250 / kg", 
                ahandi: "Kigali Market" 
            },
            { 
                imbuto: "Ibishyimbo", 
                igiciro: "RWF 300 / kg", 
                ahandi: "Nyabugogo Market" 
            }
        ];

        // Geolocation and Regional Data
        this.ahabanzaData = {
            "Kigali": {
                ubuhinzi: ["Imbuto", "Imboga", "Ibigori"],
                izuba: "Nyinshi",
                imvura: "Make"
            },
            "Musanze": {
                ubuhinzi: ["Ibirayi", "Imbuto", "Ibishyimbo"],
                izuba: "Hagati",
                imvura: "Nyinshi"
            },
            "Butare": {
                ubuhinzi: ["Ibigori", "Ibishyimbo", "Imboga"],
                izuba: "Make",
                imvura: "Nyinshi"
            }
        };

        // Weather Simulation Data
        this.imvuraData = {
            "Ukwezi kwa 1": {
                izuba: "Nyinshi",
                imvura: "Make",
                temperature: "25-30°C"
            },
            "Ukwezi kwa 2": {
                izuba: "Hagati",
                imvura: "Nyinshi",
                temperature: "20-25°C"
            }
        };

        // Community Knowledge Base
        this.ubuhinziTips = [
            {
                inyito: ["Ibigori"],
                inyungu: "Gukoresha imiti yo kurwanya umuriro",
                ubuhamya: "Niyonsenga Jean, Umuhinzi wa Musanze"
            },
            {
                inyito: ["Imbuto"],
                inyungu: "Kubungabunga ubwiherero",
                ubuhamya: "Mukamana Marie, Umuhinzi wa Kigali"
            }
        ];

        // Advanced Agricultural Intelligence Platform v2.0
        this.ubuhinziRecommendation = {
            "Kigali": {
                ibihingwa: ["Imboga", "Imbuto", "Ibigori"],
                ibyiciro: {
                    "Ibihingwa by'Umwaka Wose": ["Imboga", "Ibishyimbo"],
                    "Ibihingwa by'Izuba": ["Imbuto", "Ibigori"],
                    "Ibihingwa by'Imvura": ["Ibishyimbo", "Ibirayi"]
                }
            },
            "Musanze": {
                ibihingwa: ["Ibirayi", "Ibishyimbo", "Imbuto"],
                ibyiciro: {
                    "Ibihingwa by'Umwaka Wose": ["Ibirayi", "Imbuto"],
                    "Ibihingwa by'Izuba": ["Ibishyimbo"],
                    "Ibihingwa by'Imvura": ["Ibirayi", "Imboga"]
                }
            }
        };

        // Local Agricultural Resource Directory
        this.inyunguDirectory = {
            "Ubufasha bw'Ubuhinzi": [
                {
                    izina: "Koperative y'Ubuhinzi ya Kigali",
                    telefone: "0798388890",
                    email: "info@kigalicoop.rw",
                    intego: "Kubufasha abanyabuhinzi mu karere ka Kigali",
                    ibihingwa: ["Imboga", "Ibishyimbo", "Ibirayi"],
                    akarere: "Kigali",
                    uburambe: "Koperative nini y'abanyabuhinzi"
                },
                {
                    izina: "Ishami ry'Ubuhinzi mu Karere ka Musanze",
                    telefone: "0798388890",
                    email: "support@musanzefarm.rw",
                    intego: "Kubufasha abanyabuhinzi mu karere ka Musanze",
                    ibihingwa: ["Ibirayi", "Ibishyimbo", "Imbuto"],
                    akarere: "Musanze",
                    uburambe: "Urugaga rw'ubuhinzi ruhuriweho n'abakozi b'inzobere"
                },
                {
                    izina: "Urugaga rw'Ubuhinzi rwa Huye",
                    telefone: "0798388890",
                    email: "huye.agriculture@gov.rw",
                    intego: "Kubufasha abanyabuhinzi mu karere ka Huye",
                    ibihingwa: ["Imbuto", "Ibigori", "Ibishyimbo"],
                    akarere: "Huye",
                    uburambe: "Urugaga rufite ubumenyi buhambaye mu buhinzi"
                }
            ],
            "Inyungu z'Ubuhinzi": [
                {
                    izina: "Banki y'Ubuhinzi",
                    telefone: "0798388890",
                    email: "agriculture.bank@rw",
                    intego: "Kubufasha abanyabuhinzi mu mishinga",
                    ibihingwa: ["Kubufasha mu mishinga", "Mitiweri y'ubuhinzi"],
                    akarere: "Nationwide",
                    uburambe: "Kubufasha abanyabuhinzi mu mishinga y'ubuhinzi"
                },
                {
                    izina: "Ikigo cy'Ubushakashatsi bw'Ubuhinzi",
                    telefone: "0798388890",
                    email: "research.agriculture@rw",
                    intego: "Kubufasha mu kubungabunga ubuhinzi",
                    ibihingwa: ["Ubushakashatsi", "Kubungabunga ubutaka"],
                    akarere: "Nationwide",
                    uburambe: "Ikigo gifite ubumenyi bw'inzobere mu buhinzi"
                }
            ]
        };

        // Sustainable Farming Practices
        this.amabwiriza = [
            {
                izina: "Kubungabunga Ibidukikije",
                inyungu: [
                    "Gukoresha imiti idakoresha ibintu bibi",
                    "Kubungabunga ibimera mu buryo busanzwe",
                    "Kurinda ibidukikije"
                ]
            },
            {
                izina: "Ubuhinzi Burambye",
                inyungu: [
                    "Guhinga ibihingwa bitandukanye",
                    "Kubungabunga ubutaka",
                    "Kurinda indwara z'ibimera"
                ]
            }
        ];

        // Emergency Agricultural Support
        this.ubufasha = {
            "Indwara z'Ibimera": [
                {
                    izina: "Koperative y'Ubuvuzi bw'Ibimera",
                    telefone: "0798388890",
                    intego: "Kubufasha mu kurwanya indwara z'ibimera"
                }
            ],
            "Izuba n'Imvura": [
                {
                    izina: "Ishami ry'Ubushakashatsi bw'Ubuhinzi",
                    telefone: "0798388890",
                    intego: "Kubufasha mu gihe cy'izuba n'imvura"
                }
            ]
        };
    }

    // Advanced Disease Detection Simulation
    gukuraIndwara(ifoto) {
        // Simulate machine learning detection
        const indwara = this.indwaraZibimera.reduce((best, current) => 
            current.ubunararibonye > best.ubunararibonye ? current : best
        );
        
        const detectionResult = {
            izina: indwara.izina,
            ubunararibonye: indwara.ubunararibonye * 100,
            ibimenyetso: indwara.ibimenyetso,
            inyungu: indwara.inyungu,
            uburyo: indwara.uburyo
        };

        this.werekanaIbyavuye(detectionResult);
    }

    // Detailed Result Presentation
    werekanaIbyavuye(result) {
        const resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = `
            <div class="ml-result">
                <h3>Ubushakashatsi bw'Indwara (Disease Analysis)</h3>
                <p><strong>Izina ry'Indwara:</strong> ${result.izina}</p>
                <p><strong>Ubunararibonye (Accuracy):</strong> ${result.ubunararibonye.toFixed(2)}%</p>
                
                <div class="detection-details">
                    <h4>Ibimenyetso (Symptoms):</h4>
                    <ul>
                        ${result.ibimenyetso.map(bimenyetso => `<li>${bimenyetso}</li>`).join('')}
                    </ul>
                    
                    <h4>Inyungu (Impact):</h4>
                    <p>${result.inyungu}</p>
                    
                    <h4>Uburyo bwo Kurwanya (Treatment Methods):</h4>
                    <ul>
                        ${result.uburyo.map(buryo => `<li>${buryo}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // Additional Agricultural Intelligence
    kubungabunga(ibyiciro) {
        const inyunguZibyiciro = {
            "Ibigori": [
                "Kubungabunga mu gihe cy'izuba",
                "Gukoresha amazi make",
                "Kurinda ibimera mu gihe cy'imvura"
            ],
            "Imbuto": [
                "Gukoresha imiti yo kurwanya udukoko",
                "Kubungabunga ubwiherero",
                "Gukoresha amazi make"
            ]
        };

        return inyunguZibyiciro[ibyiciro] || [];
    }

    // Kubika Inyungu (Provide Crop Advice)
    kubikaInyungu() {
        const adviceContainer = document.getElementById('advice-container');
        adviceContainer.innerHTML = `
            <ul>
                ${this.inyunguZubuhinzi.map(inyungu => `<li>${inyungu}</li>`).join('')}
            </ul>
        `;
    }

    // Kwerekana Ibiciro (Show Market Prices)
    kwerekanaIbiciro() {
        const priceContainer = document.getElementById('price-container');
        priceContainer.innerHTML = `
            <table>
                <tr>
                    <th>Imbuto</th>
                    <th>Igiciro</th>
                    <th>Ahantu</th>
                </tr>
                ${this.ibiciroByImbuto.map(igiciro => `
                    <tr>
                        <td>${igiciro.imbuto}</td>
                        <td>${igiciro.igiciro}</td>
                        <td>${igiciro.ahandi}</td>
                    </tr>
                `).join('')}
            </table>
        `;
    }

    // Geolocation-based Agricultural Insights
    gukurikiraAhabanza(akarere) {
        const ahabanzaInfo = this.ahabanzaData[akarere] || {};
        const resultContainer = document.getElementById('geolocation-insights');
        
        resultContainer.innerHTML = `
            <h3>Ubushakashatsi bw'Ahabanza (Geolocation Insights): ${akarere}</h3>
            <div class="insights-details">
                <p><strong>Ubuhinzi:</strong> ${ahabanzaInfo.ubuhinzi ? ahabanzaInfo.ubuhinzi.join(', ') : 'Nta makuru'}</p>
                <p><strong>Izuba:</strong> ${ahabanzaInfo.izuba || 'Nta makuru'}</p>
                <p><strong>Imvura:</strong> ${ahabanzaInfo.imvura || 'Nta makuru'}</p>
            </div>
        `;
    }

    // Weather Forecasting
    kubikiraImvura(ukwezi) {
        const imvuraInfo = this.imvuraData[ukwezi] || {};
        const weatherContainer = document.getElementById('weather-forecast');
        
        weatherContainer.innerHTML = `
            <h3>Ifatabuguzi ry'Imvura (Weather Forecast): ${ukwezi}</h3>
            <div class="weather-details">
                <p><strong>Izuba:</strong> ${imvuraInfo.izuba || 'Nta makuru'}</p>
                <p><strong>Imvura:</strong> ${imvuraInfo.imvura || 'Nta makuru'}</p>
                <p><strong>Temperature:</strong> ${imvuraInfo.temperature || 'Nta makuru'}</p>
            </div>
        `;
    }

    // Community Knowledge Sharing
    werekanaAmabwiriza(inyito) {
        const matchingTips = this.ubuhinziTips.filter(tip => 
            tip.inyito.some(i => inyito.includes(i))
        );

        const tipsContainer = document.getElementById('community-tips');
        tipsContainer.innerHTML = `
            <h3>Amabwiriza y'Abandi Bahinzi (Community Tips)</h3>
            <div class="tips-list">
                ${matchingTips.map(tip => `
                    <div class="tip">
                        <p>${tip.inyungu}</p>
                        <small>- ${tip.ubuhamya}</small>
                    </div>
                `).join('') || '<p>Nta mabwiriza yabonetse</p>'}
            </div>
        `;
    }

    // Crop Price Prediction
    kubikiraIbiciro(imbuto) {
        // Simulated price prediction
        const priceData = {
            "Ibigori": {
                current: "RWF 250/kg",
                prediction: "RWF 270/kg",
                trend: "Hejuru"
            },
            "Imbuto": {
                current: "RWF 300/kg",
                prediction: "RWF 320/kg",
                trend: "Hejuru"
            }
        };

        const priceContainer = document.getElementById('price-prediction');
        const prediction = priceData[imbuto] || {};

        priceContainer.innerHTML = `
            <h3>Ibiciro by'Imbuto (Crop Price Prediction): ${imbuto}</h3>
            <div class="price-details">
                <p><strong>Igiciro Cy'Ubu:</strong> ${prediction.current || 'Nta makuru'}</p>
                <p><strong>Ibiciro Bizaza:</strong> ${prediction.prediction || 'Nta makuru'}</p>
                <p><strong>Trend:</strong> ${prediction.trend || 'Nta makuru'}</p>
            </div>
        `;
    }

    // Machine Learning Crop Recommendation
    gushakaCrop(akarere, igihe) {
        const recommendations = this.ubuhinziRecommendation[akarere];
        const resultContainer = document.getElementById('crop-recommendation');
        
        if (recommendations) {
            const recommendedCrops = recommendations.ibyiciro[igihe] || [];
            
            resultContainer.innerHTML = `
                <h3>Ibihingwa Bikwiye: ${akarere} - ${igihe}</h3>
                <ul>
                    ${recommendedCrops.map(crop => `<li>${crop}</li>`).join('')}
                </ul>
                <p>Izi mbuto zikwiye mu gihe cya ${igihe} mu karere ka ${akarere}</p>
            `;
        } else {
            resultContainer.innerHTML = '<p>Nta makuru yabonetse</p>';
        }
    }

    // Local Agricultural Resource Directory
    werekanaInyungu() {
        const directoryContainer = document.getElementById('agricultural-resources');
        
        // Group resources by category
        const resourceCategories = Object.keys(this.inyunguDirectory);
        
        const resourcesHTML = resourceCategories.map(category => `
            <div class="resource-category">
                <h3>${category}</h3>
                <div class="resources-grid">
                    ${this.inyunguDirectory[category].map(resource => `
                        <div class="resource-card">
                            <h4>${resource.izina}</h4>
                            <div class="resource-details">
                                <p><strong>Telefone:</strong> ${resource.telefone}</p>
                                <p><strong>Imeri:</strong> ${resource.email}</p>
                                <p><strong>Intego:</strong> ${resource.intego}</p>
                                <p><strong>Akarere:</strong> ${resource.akarere}</p>
                                <div class="resource-crops">
                                    <strong>Ibihingwa:</strong>
                                    <ul>
                                        ${resource.ibihingwa.map(crop => `<li>${crop}</li>`).join('')}
                                    </ul>
                                </div>
                                <p><strong>Uburambe:</strong> ${resource.uburambe}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        directoryContainer.innerHTML = `
            <h2>Inyungu z'Ubuhinzi</h2>
            ${resourcesHTML}
        `;
    }

    // Sustainable Farming Practices
    werekanaAmabwiriza() {
        const practicesContainer = document.getElementById('sustainable-practices');
        
        const practicesHTML = this.amabwiriza.map(practice => `
            <div class="practice-card">
                <h4>${practice.izina}</h4>
                <ul>
                    ${practice.inyungu.map(inyungu => `<li>${inyungu}</li>`).join('')}
                </ul>
            </div>
        `).join('');

        practicesContainer.innerHTML = `
            <h3>Amabwiriza y'Ubuhinzi Burambye</h3>
            ${practicesHTML}
        `;
    }

    // Emergency Agricultural Support
    werekanaUbufasha() {
        const emergencyContainer = document.getElementById('emergency-support');
        
        const emergencyHTML = Object.entries(this.ubufasha).map(([category, supports]) => `
            <div class="emergency-category">
                <h4>${category}</h4>
                ${supports.map(support => `
                    <div class="support-card">
                        <p><strong>${support.izina}</strong></p>
                        <p>Telefone: ${support.telefone}</p>
                        <p>Intego: ${support.intego}</p>
                    </div>
                `).join('')}
            </div>
        `).join('');

        emergencyContainer.innerHTML = `
            <h3>Ubufasha mu Bihe Bikomeye</h3>
            ${emergencyHTML}
        `;
    }
}

// Image Disease Detection Enhancement
class ImageDiseaseDetector {
    constructor() {
        this.diseaseDatabase = {
            "Potato Blight": {
                symptoms: [
                    "Umutezi w'ibara ryera ku mbuto",
                    "Ibyatsi birimo amasaku",
                    "Ibara ry'umutsi ku mbuto"
                ],
                severity: "Nini",
                treatment: [
                    "Gukuraho ibimera byaribwa n'indwara",
                    "Gukoresha imiti yo kurwanya indwara",
                    "Kubungabunga isuku mu bice by'ubuhinzi"
                ]
            },
            "Tomato Leaf Spot": {
                symptoms: [
                    "Amasaku yo ku mbuto",
                    "Ibara ryera ku mbuto",
                    "Ibyatsi birimo amapfunze"
                ],
                severity: "Hagati",
                treatment: [
                    "Gukoresha imiti yo kurwanya indwara",
                    "Kubika ibimera mu buryo busanzwe",
                    "Kurinda ko ibimera biba mu buryo bwiza"
                ]
            },
            "Corn Rust": {
                symptoms: [
                    "Umutezi w'umuhondo ku mbuto",
                    "Ibara ry'umuhondo ku mbuto",
                    "Ibyatsi birimo amapfunze"
                ],
                severity: "Hasi",
                treatment: [
                    "Gukoresha imiti yo kurwanya indwara",
                    "Kubika ibimera mu buryo busanzwe",
                    "Gukuraho ibimera byaribwa n'indwara"
                ]
            }
        };

        this.alertLevels = {
            "Nini": {
                color: "#e74c3c",
                message: "Ikibazo Gikomeye: Komeza Ubufasha"
            },
            "Hagati": {
                color: "#f39c12",
                message: "Ikibazo Hagati: Reba Ubufasha"
            },
            "Hasi": {
                color: "#2ecc71",
                message: "Ikibazo Gito: Komeza Ubufasha"
            }
        };
    }

    // Simulate AI Image Analysis
    analyzeImage(imageFile) {
        // In a real-world scenario, this would use machine learning
        const randomDiseases = Object.keys(this.diseaseDatabase);
        const detectedDisease = randomDiseases[Math.floor(Math.random() * randomDiseases.length)];
        
        return this.generateDiseaseAlert(detectedDisease);
    }

    generateDiseaseAlert(diseaseName) {
        const diseaseInfo = this.diseaseDatabase[diseaseName];
        const alertLevel = this.alertLevels[diseaseInfo.severity];

        const alertHTML = `
            <div class="disease-alert" style="background-color: ${alertLevel.color}; color: white;">
                <h3>Kubara Indwara: ${diseaseName}</h3>
                <div class="alert-details">
                    <div class="symptoms">
                        <h4>Ibimenyetso:</h4>
                        <ul>
                            ${diseaseInfo.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="severity">
                        <h4>Ubunini bw'Ikibazo:</h4>
                        <p>${diseaseInfo.severity}</p>
                    </div>
                    <div class="treatment">
                        <h4>Ubufasha:</h4>
                        <ul>
                            ${diseaseInfo.treatment.map(step => `<li>${step}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="alert-message">
                    <strong>${alertLevel.message}</strong>
                </div>
            </div>
        `;

        return alertHTML;
    }

    // Image Upload and Analysis
    handleImageUpload(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];
        const resultContainer = document.getElementById('disease-detection-result');

        if (file) {
            // Create file reader to simulate image processing
            const reader = new FileReader();
            
            reader.onload = (e) => {
                // Create image element to display uploaded image
                const img = document.createElement('img');
                img.src = e.target.result;
                img.classList.add('uploaded-image');
                
                // Clear previous results
                resultContainer.innerHTML = '';
                
                // Append uploaded image
                resultContainer.appendChild(img);
                
                // Simulate disease detection
                const diseaseAlert = this.analyzeImage(file);
                resultContainer.innerHTML += diseaseAlert;
            };

            reader.readAsDataURL(file);
        }
    }
}

// Contact and Feedback Management
class UbuhinziFeedback {
    constructor() {
        this.contactInfo = {
            phone: "0798388890",
            email: "Hakorimanasharif12@gmail.com",
            supportHours: "Kuva 08:00 - 17:00 (Iminsi y'Akazi)"
        };

        this.feedbackTypes = [
            "Inama z'Ubuhinzi",
            "Indwara z'Ibimera",
            "Ibiciro by'Imbuto",
            "Ubufasha Busanzwe"
        ];
    }

    // Initialize Feedback Form
    initializeFeedbackForm() {
        const formContainer = document.getElementById('feedback-container');
        
        const feedbackFormHTML = `
            <form id="ubuhinzi-feedback-form">
                <h3>Tanga Ikiganiro</h3>
                
                <div class="form-group">
                    <label for="izina">Izina Ryawe</label>
                    <input 
                        type="text" 
                        id="izina" 
                        name="izina" 
                        required 
                        placeholder="Andika Izina Ryawe"
                    >
                </div>
                
                <div class="form-group">
                    <label for="telephone">Numero ya Telephone</label>
                    <input 
                        type="tel" 
                        id="telephone" 
                        name="telephone" 
                        value="0798388890" 
                        readonly
                    >
                </div>
                
                <div class="form-group">
                    <label for="email">Imeri</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value="Hakorimanasharif12@gmail.com" 
                        readonly
                    >
                </div>
                
                <div class="form-group">
                    <label for="feedback-type">Ubwoko bw'Ikiganiro</label>
                    <select id="feedback-type" name="feedback-type" required>
                        ${this.feedbackTypes.map(type => 
                            `<option value="${type}">${type}</option>`
                        ).join('')}
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="message">Ikiganiro</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        placeholder="Andika Ikiganiro Cyawe"
                    ></textarea>
                </div>
                
                <button type="button" onclick="ubuhinziFeedback.submitFeedback()">
                    Ohereza Ikiganiro
                </button>
            </form>
        `;

        formContainer.innerHTML = feedbackFormHTML;
    }

    // Submit Feedback
    submitFeedback() {
        const form = document.getElementById('ubuhinzi-feedback-form');
        const messageContainer = document.getElementById('feedback-message');
        
        // Basic form validation
        if (!form.checkValidity()) {
            messageContainer.innerHTML = `
                <div class="alert alert-danger">
                    Nyamuneka wuzuza amakuru yose
                </div>
            `;
            return;
        }

        // Simulate feedback submission
        const formData = new FormData(form);
        const feedbackData = Object.fromEntries(formData.entries());

        // In a real-world scenario, this would send data to a backend
        console.log('Feedback Submitted:', feedbackData);

        // Show success message
        messageContainer.innerHTML = `
            <div class="alert alert-success">
                Ikiganiro cyawe cyakiriwe. Tuzagusubiza vuba.
            </div>
        `;

        // Reset form
        form.reset();
    }

    // Display Contact Information
    displayContactInfo() {
        const contactContainer = document.getElementById('contact-info');
        
        contactContainer.innerHTML = `
            <div class="contact-details">
                <h3>Twandikire</h3>
                <p><strong>Telefone:</strong> ${this.contactInfo.phone}</p>
                <p><strong>Imeri:</strong> ${this.contactInfo.email}</p>
                <p><strong>Amasaha y'Ubufasha:</strong> ${this.contactInfo.supportHours}</p>
            </div>
        `;
    }
}

// Global AI Instance
const ubuhinziAI = new UbuhinziAI();

// Global Disease Detector Instance
const diseaseDetector = new ImageDiseaseDetector();

// Global Feedback Instance
const ubuhinziFeedback = new UbuhinziFeedback();

// Initialization and Event Handling
document.addEventListener('DOMContentLoaded', () => {
    // Initial setup
    ubuhinziAI.kubikaInyungu();
    ubuhinziAI.kwerekanaIbiciro();
    ubuhinziAI.werekanaInyungu();
    ubuhinziAI.werekanaAmabwiriza();
    ubuhinziAI.werekanaUbufasha();
    ubuhinziFeedback.initializeFeedbackForm();
    ubuhinziFeedback.displayContactInfo();
});

function detectDisease() {
    const imageInput = document.getElementById('crop-image');
    const file = imageInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            ubuhinziAI.gukuraIndwara(e.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        alert("Nyamuneka, hitamo ifoto y'ibimera");
    }
}

function gukurikiraAhabanza() {
    const akarereSelect = document.getElementById('akarere-select');
    ubuhinziAI.gukurikiraAhabanza(akarereSelect.value);
}

function kubikiraImvura() {
    const ukweziSelect = document.getElementById('ukwezi-select');
    ubuhinziAI.kubikiraImvura(ukweziSelect.value);
}

function werekanaAmabwiriza() {
    const inyitoInput = document.getElementById('inyito-input');
    ubuhinziAI.werekanaAmabwiriza(inyitoInput.value.split(','));
}

function kubikiraIbiciro() {
    const imbutaSelect = document.getElementById('imbuto-select');
    ubuhinziAI.kubikiraIbiciro(imbutaSelect.value);
}

function gushakaCrop() {
    const akarereSelect = document.getElementById('akarere-crop-select');
    const igiheSelect = document.getElementById('igihe-select');
    ubuhinziAI.gushakaCrop(akarereSelect.value, igiheSelect.value);
}

// Attach image upload handler
document.addEventListener('DOMContentLoaded', () => {
    const imageUploadInput = document.getElementById('crop-image-upload');
    if (imageUploadInput) {
        imageUploadInput.addEventListener('change', (event) => 
            diseaseDetector.handleImageUpload(event)
        );
    }
});
