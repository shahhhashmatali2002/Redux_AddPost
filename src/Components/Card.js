import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Cards = () => {
    const [arr, setArr] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${1}`)
            .then((res) => {
                // console.log("Response", res)
                // newArr.push(res.data)
                setArr(res.data)
                // console.log("ResponseAgain", arr)
            })
            .catch((err) => console.log(err))
    }, [])

    const checkSolution = () => {
        var a;
        var a = 9
        console.log('aaaaa',a)
    }

    useEffect(() => {
        checkSolution()
        arr.map((ele) => console.log("ele", ele))
    }, [arr])
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {
                    arr.map((Ele) => {
                        return (
                            <div className="col-lg-4 mt-4" key={Ele.id}>
                                <Card className={''} variant="">
                                    <CardContent>
                                        <Typography className={''} color="textSecondary" gutterBottom>
                                            {Ele.name !== undefined ? Ele.name : "Word of the Day"}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            {Ele.email !== undefined ? Ele.email : "be nev o lent"}
                                        </Typography>
                                        <Typography className={''} color="textSecondary">
                                            {Ele.body !== undefined ? Ele.body : "adjective"}
                                        </Typography>
                                        {/* <Typography variant="body2" component="p">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography> */}
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Cards