import React from 'react'
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles ({
    wapper: (props) => {
        if (props.type === 'confirmed') return { borderLeft: '5px solid #c9302c'};
        if (props.type === 'recovered') return { borderLeft: '5px solid #28a745'};
        else return {borderLeft: '5px solid gray'};
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
    },
    count: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})

export default function HighlightCard({title, count, type}) {
    const styles = useStyles({type});

    return (
       <Card className={styles.wapper}>
              <CardContent>
                  <Typography component="p" variant="body2" className={type.title}>{title}</Typography>
                  <Typography component="span" variant="body2" className={type.count}>
                    <CountUp end={count || 0 } duration={2} separator=' '/>
                    </Typography>
              </CardContent>
          </Card>
    );
}
