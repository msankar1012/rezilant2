import { TypeAnimation  } from 'react-type-animation';


export const TypingText = () => {
    return (
        <TypeAnimation
            sequence={[
                'Web designing', // Types 'One'
                2500, // Waits 1s
                'Web development', // Deletes 'One' and types 'Two'
                2500, // Waits 3s
                'App development', // Types 'Three' without deleting 'Two'
                2500, // Waits 3s
                'Digital marketing', // Types 'Three' without deleting 'Two'
                2500, // Waits 3s
                () => {
                    console.log('Sequence completed');
                },
            ]}
            wrapper="span"
            cursor={true}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}
