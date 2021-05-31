import React from 'react';
import {Container, Typography} from "@material-ui/core";


const Home = () => {
    const jokeText = `Улитка заходит в бар, но бармен заявляет:
     "У нас строгая политика в отношении улиток!" — и ногой выпихивает ее на улицу. 
     Через неделю улитка возвращается в бар и говорит бармену: "Ну и нахуя ты это сделал!?"`;

    return (
        <Container maxWidth={'md'}>
            <Typography variant={'h3'}>Анекдот про улитку</Typography>
            <Typography variant={'h5'}>
                {jokeText}
            </Typography>
        </Container>
    );
};

export default Home;
