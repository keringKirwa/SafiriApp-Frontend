import { makeStyles } from '@material-ui/core/styles';

/* the makeStyles() methiod is used in making a styling objects with other objects in it as prperties . the default export will allow us rename the makeStyles methid as if it were a Hook*/


export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    NotLoggedinPaper: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'spaceBetween',
        width: '400px',
        height:'100vh',
        position: 'fixed',
        right: 0,
        top: 100,
        border: '2px gold',
        paddingRight: 0,
        
    },
    LoggedinPaper: {
        padding: theme.spacing(3),
        height: "450px",
    },

    form: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'center',
        height: theme.spacing(20),

    },
    fileInput: {
        width: '97%',
        margin: '3px 0',
    },
    buttonSubmit: {  
        marginBottom: 10,
    },
}));