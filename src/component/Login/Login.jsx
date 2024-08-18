import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsHouseUp } from 'react-icons/bs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import './Login.css';

// Stylizowany TextField
const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'var(--border-color)',
            borderWidth: '2px',
        },
        '&:hover fieldset': {
            borderColor: 'var(--border-hover-color)',
            borderWidth: '3px',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'var(--border-focus-color)',
            borderWidth: '3px',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'var(--label-color)',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'var(--label-focus-color)',
    },
}));

const Login = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <Button className="btn-home"
                   onClick={handleHomeClick}
                   sx={{
                       padding: 0, 
                       minWidth: 'unset', 
                   }}
               >
                    <BsHouseUp className="btn-home-ico"
                    />
                </Button>
                <form className="login-form">
                    <div className="login-form-content">
                        <div className="login-image-container">
                            <img src="/assets/images/Login/Login-image.png" alt="Login" />
                        </div>
                        <div className="form-fields-container">
                            <h2>Sign in</h2>
                            <div className="form-group">
                                <CustomTextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <CustomTextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </div>
                            <div className="form-buttons">
                                <Button
                                    type="submit"
                                    className="btn-sign-in"
                                >
                                    Sign In
                                </Button>
                                <Button
                                    type="button"
                                    className="btn-register"
                                    onClick={handleRegisterClick}
                                >
                                    Register
                                </Button>
                            </div>
                            <div className="additional-options">
                                <FormControlLabel
                                    control={<Checkbox className="custom-checkbox" />}
                                    label="Remember me"
                                    className="custom-form-label"
                                />
                                <p className="forgot-password">
                                    Forgot your password?
                                </p>
                            </div>
                            <p className="social-login-text">
                                Or sign in with:
                            </p>
                            <div className="social-login-buttons">
                                <Button
                                    variant="contained"
                                    className="social-login-button"
                                >
                                    <FacebookIcon className="social-icon" />
                                </Button>
                                <Button
                                    variant="contained"
                                    className="social-login-button"
                                >
                                    <GoogleIcon className="social-icon" />
                                </Button>
                                <Button
                                    variant="contained"
                                    className="social-login-button"
                                >
                                    <AppleIcon className="social-icon" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;