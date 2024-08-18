import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsHouseUp } from 'react-icons/bs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import './Register.css'; 

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

const Register = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/'); // Przekierowuje użytkownika na stronę główną
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="register-container">
            <div className="register-form-container">
                {/* Przycisk do strony głównej */}
                <Button
                    className="btn-home"
                    onClick={handleHomeClick}
                    sx={{
                        padding: 0,
                        minWidth: 'unset',
                    }}
                >
                    <BsHouseUp className="btn-home-ico" />
                </Button>
                <form className="register-form">
                    <div className="register-form-content">
                        <div className="register-image-container">
                            <img src="/assets/images/Register/Register-image.png" alt="Register" />
                        </div>
                        <div className="form-fields-container">
                            <h2>Create An Account</h2>
                            <div className="form-group">
                                <CustomTextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <CustomTextField
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <CustomTextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </div>
                            <div className="form-buttons-register">
                                <Button
                                    type="submit"
                                    className="btn-register-account"
                                >
                                    Create Account
                                </Button>
                                <Button
                                    type="button"
                                    className="btn-login-account"
                                    onClick={handleLoginClick}
                                >
                                    Back to Sign In
                                </Button>
                            </div>
                            <p className="social-register-text">
                                Or sign up with:
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

export default Register;