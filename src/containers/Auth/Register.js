import React from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from '../../components/Auth';

const Register = () => {
    return (
        <AuthContent title="회원가입">
            <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
            <InputWithLabel label="아이디" name="id" placeholder="아이디"/>
            <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
            <InputWithLabel label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password"/>
            <AuthButton>회원가입</AuthButton>
            <RightAlignedLink to="/auth">로그인</RightAlignedLink>
        </AuthContent>
    );
}

export default Register;