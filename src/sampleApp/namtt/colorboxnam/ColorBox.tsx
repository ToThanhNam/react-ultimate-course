import { useState } from "react";
import './ColorBoxStyle.css';

interface ColorItem {
    id: number, 
    name: string,
    hex: string
}

const COLOR_LIST: ColorItem[] = [
    { id: 1, name: 'red', hex: '#e74c3c' },
    { id: 2, name: 'yellow', hex: '#f1c40f' },
    { id: 3, name: 'aqua', hex: '#1abc9c' },
    { id: 4, name: 'purple', hex: '#9b59b6' },
];


const ColorBoxNam = () => {

    // Quản lý state khai báo ở đây
    // useState là 1 hook để quản lý state trong React , trả về 1 mảng 2 phần tử 
    // Sử dụng destructuring để lấy current value và set value để re-render lại component
    const [selectedColor, setSelectedColor] = useState<string | null> (null);

    
    // Create a function to handle toggle logic 
    // nếu selectedColor = box.name thì selectedColor = null 
    // nếu selectedColor != box.name thì selectedColor = box.name 
    function handleToggleColorBox(name: string): void {
        if (selectedColor === name) {
            setSelectedColor(null);
        } else {
            setSelectedColor(name);
        }
    }

    // Create a function to sync background color for all boxes
    function getBoxBackgroundColor(boxName: string): string {
        
        const activeColor = COLOR_LIST.find(box => box.name === selectedColor);
        
        if(activeColor) {
            return activeColor.hex;
        } else {
            const currentColor = COLOR_LIST.find(box => box.name === boxName);
            return currentColor ? currentColor.hex : '';
        }
    }

    return (
        // <> công dụng của nó là không tạo thêm div ( tránh thừa DOM )
        // React component chỉ có thể return 1 JSX duy nhất
        <>
            <div className="game-container">
                <h1>Sample App: ColorBoxNam</h1>
                <h3>Current color: {selectedColor ? selectedColor : 'No color selected'}</h3>

                <div className="box-list">
                {COLOR_LIST.map((box) => {
                    const backgroundColor = getBoxBackgroundColor(box.name);

                    return (
                        <div
                            key={box.id}
                            className="nam-color-box"
                            style={{backgroundColor}}
                            onClick = {() => handleToggleColorBox(box.name)}
                        >
                            {box.name}
                        </div>
                    )
                })}
                </div> 
            </div>

        </> 
    )
}

export default ColorBoxNam;