import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import A110Pure from '../../Assets-TP-Alpine/images/configurateur/modele/selection/pure.png';
import A110Legende from '../../Assets-TP-Alpine/images/configurateur/modele/selection/legende.png';
import A110PureBlanc from '../../Assets-TP-Alpine/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg';
import A110LegendeBlanc from '../../Assets-TP-Alpine/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg';
import A110PureJanteStandard from '../../Assets-TP-Alpine/images/configurateur/jantes/selection/jante-standard.jpg';
import A110LegendeJanteLegende from '../../Assets-TP-Alpine/images/configurateur/jantes/selection/jante-legende.jpg';
import A110PureSiegeBaquet from '../../Assets-TP-Alpine/images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg';
import A110LegendeSiegeNoir from '../../Assets-TP-Alpine/images/configurateur/interieurs/selection/cuir-noir.jpg';
import A110AudioStrandard from '../../Assets-TP-Alpine/images/configurateur/equipements/categories/media et navigation/audio-standard.jpg';
import A110RetroIntElectrochrome from '../../Assets-TP-Alpine/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg';
import A110Sécurité from '../../Assets-TP-Alpine/images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg';
import A110PersoExterieur from '../../Assets-TP-Alpine/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg';
import A110persoInterieur from '../../Assets-TP-Alpine/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg';






const initialState = { 

    Alpine:[
        {
            id:1,
         name: 'A110 Pure', image: A110Pure, price: 54700,
         color: { name: 'Peinture opaque Blanc Glacier', price: 0, image: A110PureBlanc},
         jantes: { name: 'Standard', price: 0, image: 'A110PureJanteStandard'},
         Scellerie: { name: 'Sièges baquets en cuir noir et Dinamica', price: 0, image: 'A110PureSiegeBaquet'},
         Equipements: [ {

             design: [],
                media: [
                    {
                    name: 'Système Audio standard', price: 0, image: A110AudioStrandard
                }
            ],
                confort: {
                    name: 'Retroviseur intérieur électrochrome', price: 0, image: 'A110RetroIntElectrochrome'
                },
                Conduire: {
                    name: '', price: 0, image: ''
                },
                Securite: {
                    name: "Assistance au freinage d'urgence", price: 0, image: 'A110Sécurité'
                },
                PersoExterieur: {
                    name: 'Etriers de frein couleur Gris Anthracite', price: 0, image: 'A110PersoExterieur'
                },
                PersoInterieur: {
                    name: 'Harmonie carbone mat', price: 0, image: 'A110persoInterieur'
                }  
                
            }],
            
         Accessoires: { 
            TransportEtProtection: {
            name: '', price: 0, image: ''
            },
            Multimedia: {
            name: '', price: 0, image: ''
            },
            Interieur: {
            name: '', price: 0, image: ''
            },
            MatérielDeGarage: {
            name: '', price: 0, image: ''
            },
            Exterieur : {
            name: '', price: 0, image: ''
            }    
        }
        },

        {id:2,
             name: 'A110 Légende', image: A110Legende, price: 58500, 
            color: { name: 'Peinture opaque Blanc Glacier', price: 1800, image: 'A110LegendeBlanc'},
            jantes: { name: 'Legende', price: 0, image: 'A110LegendeJanteLegende'},
            Scellerie: { name: 'Sièges Confort en cuir noir', price: 0, image: 'A110LegendeSiegeNoir'},
            Equipements: { 
                design: {
                name: '', price: 0, image: ''
                },
                media: {
                name: 'Système Audio standard', price: 0, image: 'A110AudioStrandard'
                },
                confort: {
                name: 'Retroviseur intérieur électrochrome', price: 0, image: 'A110RetroIntElectrochrome'
                },
                Conduire: {
                name: '', price: 0, image: ''
                },
                Securite: {
                name: "Assistance au freinage d'urgence", price: 0, image: 'A110Sécurité'
                },
                PersoExterieur: {
                name: 'Etriers de frein couleur Gris Anthracite', price: 0, image: 'A110PersoExterieur'
                },
                PersoInterieur: {
                name: 'Harmonie carbone mat', price: 0, image: 'A110persoInterieur'
                }  
            },
             Accessoires: { 
                TransportEtProtection: {
                name: '', price: 0, image: ''
                },
                Multimedia: {
                name: '', price: 0, image: ''
                },
                Interieur: {
                name: '', price: 0, image: ''
                },
                MatérielDeGarage: {
                name: '', price: 0, image: ''
                },
                Exterieur : {
                name: '', price: 0, image: ''
                }    
            }
        }
           ],

};

const alpineSlice = createSlice({ 

    name: 'alpine',
    initialState,
    reducers: {
       changeColor: (state, action) => {
           state.Alpine.color = action.payload;
       }
        


    },

    

});

export default alpineSlice.reducer;