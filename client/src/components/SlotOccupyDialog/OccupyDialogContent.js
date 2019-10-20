import { h, Component } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const GET_ALL_USERS = gql`
    query GetAllUsers {
        getAllUsers {
            id
            displayName
            email
            isAdmin
            cars {
                id
                name
                plate
            }
        }
    }
`;

const OCCUPY_PARKING_SPOT = gql`
    mutation OccupyParkingSpot($toggleInput: ToggleParkingSpotInput!){
        occupyParkingSpot(toggleInput: $toggleInput) {
            id
            number
            isOccupied
            occupiedAt
            user {
                id
                displayName
            }
            car {
                id
                plate
                name
            }
        }
    }
`;

const OccupyDialogContent = ({ onDialogClose, slotData }) => {
    const {
        id: spotId,
        number,
        user,
        car,
        isOccupied
    } = slotData;

    const [cars, setCars] = useState([]);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const { loading: usersLoading, data: usersData } = useQuery(GET_ALL_USERS);
    const [occupyParkingSpot, { data: occupyMutationData }] = useMutation(OCCUPY_PARKING_SPOT);

    const classes = useStyles();

    const handleChangeCar = useCallback((e) => {
        setValues({
            ...values,
            carId: e.target.value
        });
    }, [values]);

    const handleChangeUser = useCallback((e) => {
        const selectedUserId = e.target.value;

        // find the user from the list
        const selectedUser = usersData.getAllUsers.find(({ id }) => selectedUserId === id);

        setValues({
            ...values,
            userId: selectedUserId
        });

        if (selectedUser) {
            setCars(selectedUser.cars);
        }
    }, [values, usersData]);

    const handleOccupyClick = useCallback((e) => {
        const { userId, carId } = values;

        occupyParkingSpot({ variables: {
            toggleInput: {
                spotId,
                userId,
                carId
            }
        }}).then(() => {
            setErrors({});
            onDialogClose();
        }).catch(err => {
            const currentErrors = err.graphQLErrors[0].extensions.exception.errors;
            setErrors({
                ...currentErrors
            });
        })
    }, [values])

    return (
        <>
            {usersLoading ?
                <DialogTitle id="form-dialog-title">Loading...</DialogTitle> :
                <>
                    <DialogTitle id="form-dialog-title">Occupy Slot</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please select the user and car to occupy the parking slot <strong>#{number}</strong>.
                        </DialogContentText>
                        <form className={classes.root} autoComplete="off">
                            <FormControl className={classes.formControl} error={errors.user ? true : false}>
                                <InputLabel htmlFor="user-native-simple">User</InputLabel>
                                <Select
                                    native
                                    value={values.userId}
                                    onChange={handleChangeUser}
                                    inputProps={{
                                        name: 'user',
                                        id: 'user-native-simple',
                                    }}
                                >
                                    <option value="" />
                                    {usersData.getAllUsers.map(({ displayName, id }) => {
                                        return <option key={id} value={id}>{displayName}</option>
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl} error={errors.car ? true : false}>
                                <InputLabel htmlFor="car-native-simple">Car</InputLabel>
                                <Select
                                    native
                                    value={values.carId}
                                    onChange={handleChangeCar}
                                    inputProps={{
                                        name: 'car',
                                        id: 'car-native-simple',
                                    }}
                                >
                                    <option value="" />
                                    {cars.map(({ id, name, plate }) => {
                                        return <option key={id} value={id}>{name} - {plate}</option>
                                    })}
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleOccupyClick} color="primary">
                            Occupy
                        </Button>
                        <Button onClick={onDialogClose}>
                            Cancel
                        </Button>
                    </DialogActions>
                </>
            }
        </>
    );
}

export default OccupyDialogContent;