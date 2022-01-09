import React from 'react'
// import Button from '../../components/compo.tailwind/Button';



export default function FoodCard(props) {
    
    let {name, username, email, address}=props.food;

    return (
        <>
            <article className="flex p-3 flex-col border-safire border-2 ">
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            {/* <Button /> */}
            </article>
        </>
    )
}
