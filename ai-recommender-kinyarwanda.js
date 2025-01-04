// Urwego rw'Ubushakashatsi bw'Inyongosho (AI Service Recommender in Kinyarwanda)

class UbushakashatsiAhantu {
    constructor() {
        // Amashusho y'Inyongosho (Service Database)
        this.serivisi = [
            {
                izina: "Gukurura Umusatsi Gato",
                inyito: ["umusatsi muto", "abagabo", "akazi", "guhindura"],
                bikwiye: ["akazi", "gutembera", "ubucuruzi"]
            },
            {
                izina: "Gukurura Umusatsi mu Buryo bwa Fade",
                inyito: ["umusatsi muto", "abagabo", "imyambarire mishya"],
                bikwiye: ["urubyiruko", "gutembera", "imyambarire"]
            },
            {
                izina: "Gupfuka Umusatsi",
                inyito: ["umusatsi muremure", "abagore", "ishusho nziza"],
                bikwiye: ["ubukwe", "ibirori", "akazi"]
            },
            {
                izina: "Guhindura Ibara ry'Umusatsi",
                inyito: ["ibara", "guhindura", "ishusho nshya"],
                bikwiye: ["kwitoza", "guhindura", "gukora"]
            },
            {
                izina: "Gukurura Uruhu rw'Umugabo",
                inyito: ["abagabo", "kwirinda", "umusatsi muto"],
                bikwiye: ["akazi", "kubara"]
            }
        ];
    }

    // Gushaka serivisi zikwiye (Recommendation Algorithm)
    gushakaSerivisi(profayiri) {
        return this.serivisi.filter(serivisi => 
            serivisi.inyito.some(inyito => profayiri.inyito.includes(inyito)) ||
            serivisi.bikwiye.some(bikwiye => profayiri.igikorwa.includes(bikwiye))
        );
    }

    // Gutangira ubushakashatsi (Interactive Recommendation)
    gutangiraUbushakashatsi() {
        const ibibazo = [
            "Umusatsi wawe uri muto, muri hagati, canke muremure? (muto/hagati/muremure)",
            "Ubyifuza gute? (akazi/gutembera/imyambarire mishya)",
            "Ni ibihe bihe? (akazi/ibirori/buri munsi)"
        ];

        let profayiri = {
            inyito: [],
            igikorwa: []
        };

        ibibazo.forEach(ikibazo => {
            const igisubizo = prompt(ikibazo).toLowerCase();
            
            switch(ikibazo) {
                case ibibazo[0]:
                    profayiri.inyito.push(igisubizo + " umusatsi");
                    break;
                case ibibazo[1]:
                    profayiri.igikorwa.push(igisubizo);
                    break;
                case ibibazo[2]:
                    profayiri.igikorwa.push(igisubizo);
                    break;
            }
        });

        const inyongosho = this.gushakaSerivisi(profayiri);
        
        // Kwerekana inyongosho zikesha
        const divyaInyongosho = document.getElementById('ai-recommendations-kinyarwanda');
        divyaInyongosho.innerHTML = `
            <h3>Inyongosho Zikesha:</h3>
            <ul>
                ${inyongosho.map(serivisi => `<li>${serivisi.izina}</li>`).join('')}
            </ul>
        `;
    }
}

// Gutangiza Ubushakashatsi
const ubushakashatsiAhantu = new UbushakashatsiAhantu();

// Kwerekana Ubushakashatsi
function gushakaNyongosho() {
    ubushakashatsiAhantu.gutangiraUbushakashatsi();
}
