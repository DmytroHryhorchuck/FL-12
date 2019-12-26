let userEmail = prompt('Please type your email (for example user@gmail.com)')
if (userEmail === null || userEmail === '') {
    alert('Canceled')
}else {
    let minUserEmailLength = 5;
    if (userEmail.length < minUserEmailLength) {
        alert("I don't know any emails having name length less than 5 symbols")
    }else {
        if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
            let userPassword = prompt('Please type your password');
            if (userPassword === null || userPassword === '') {
                alert('Canceled')
            }else {
                if (userEmail === 'user@gmail.com' && userPassword === 'UserPass' 
                || userEmail === 'admin@gmail.com' && userPassword === 'AdminPass') {
                    let newUserPasswordConfirm = confirm('Do you want to change your password?');
                    if (!newUserPasswordConfirm) {
                        alert('You have failed the change.')
                    }else {
                        let oldUserPassword = prompt('Please type your old password');
                        if (oldUserPassword === null || oldUserPassword === '') {
                            alert('Canceled')
                        }else {
                            if (userEmail === 'user@gmail.com' && userPassword === oldUserPassword 
                            || userEmail === 'admin@gmail.com' && oldUserPassword) {
                                let newUserPassword = prompt('Please type your new password');
                                if (newUserPassword === null || userPassword === '') {
                                    alert('Canceled')
                                }else {
                                    let newUserPasswordLength = 6
                                    if (newUserPassword.length < newUserPasswordLength) {
                                        alert('It’s too short password. Sorry.')
                                    }else {
                                        let newUserPasswordCheck = prompt('Please type your new password again');
                                        if (newUserPasswordCheck === newUserPassword) {
                                            alert('You have successfully changed your password.')
                                        }else {
                                            alert('You wrote the wrong password.')
                                        }
                                    }
                                }
                            }else {
                                alert('Wrong password')
                            }
                        }
                    }
                }else {
                    alert('Wrong password')
                }
            }
        }else {
            alert('I don’t know you')
        }
    }
}