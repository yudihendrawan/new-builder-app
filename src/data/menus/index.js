import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../../assets';

export const menus = [
  {
    id: 1,
    nama: 'Edit Profile',
    gambar: <Icon name={'user-edit'} size={30} color={colors.primaryText} />,
    halaman: 'EditProfile'
  },
  {
    id: 2,
    nama: 'Change Password',
    gambar: <Icon name={"lock"} size={30} color={colors.primaryText} />,
    halaman: 'ChangePassword'
  },
  {
    id: 3,
    nama: 'History Pemesanan',
    gambar: <Icon name={"history"} size={30} color={colors.primaryText} />,
    halaman: 'History'
  },
  {
    id: 4,
    nama: 'Sign Out',
    gambar: <Icon name={"sign-out-alt"} size={30} color={colors.primaryText} />,
    halaman: 'Login'
  },
];
