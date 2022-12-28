import React from 'react';
import { useState, useEffect } from 'react';

const Info1 = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log("effect !");
        console.log(name);

        //cleanup함수 반환
        return () => {
            console.log('cleanup');
            console.log(name);
        }
        
    }, [name]); // ,[] 주면 맨 처음 렌더링(마운트)될때만 실행 됨. [name] :name값이 바뀌었을때만 실행

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info1