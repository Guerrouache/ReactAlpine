import React, {useEffect, useState} from 'react';
import './configure.css';
import image15 from '../../Assets-TP-Alpine/images/configurateur/modele/selection/legende.png';
import image16 from '../../Assets-TP-Alpine/images/configurateur/modele/selection/pure.png';
import image15Blanc from "../../Assets-TP-Alpine/images/configurateur/couleurs/selection/blanc.jpg" 
import { useSelector } from 'react-redux';

function Configure() {
const [selectedModel, setSelectedModel] = useState('A110 Pure');
const [selectedMode2, setSelectedModel2] = useState('A110 Legende');

const alpine = useSelector((store) => store.alpine.Alpine);
let selectedAlpine = alpine.find((alpine) => alpine.name === selectedModel);
let selectedAlpineColor = alpine.find((alpine) => alpine.color === selectedMode2);


useEffect(() => {
    selectedAlpine = alpine.find((alpine) => alpine.name === selectedModel);
console.log(selectedAlpine.price);
}, [selectedModel]);
    selectedAlpineColor = alpine.find((alpine) => alpine.color === setSelectedModel2);


const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
};

const handleModelChange2 = (event) => {
    setSelectedModel2(event.target.value);
    console.log(selectedAlpineColor.price)
};

return (
    <div>
        <h1 className='text-light'>Configurez votre A110</h1>
        <img src={selectedAlpine.image} alt={selectedAlpine.name} className='img'/>
        <div>
            <h2 className=''>Choisissez votre modèle</h2>
            <select className='select' value={selectedModel} onChange={handleModelChange}>
                <option value='A110 Pure'>A110 Pure</option>
                <option value='A110 Légende'>A110 Légende</option>
            </select>
        </div>

        <div>
            <h2 className=''>Choisissez votre couleur</h2>

            <select className='select' value={selectedAlpineColor} onChange={handleModelChange2}>   
                <option value='Peinture opaque Blanc Glacier'>Peinture opaque Blanc Glacier</option>
                <option value='Teinte spéciale Bleu Alpine'>Teinte spéciale Bleu Alpine</option>
                <option value='Teinte métallisée Noir Profond'>Teinte métallisée Noir Profond</option>
            </select>
            <p>
               {selectedAlpine.price} €
            </p>
        </div>
    </div>
);
}

export default Configure