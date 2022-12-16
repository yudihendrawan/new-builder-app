import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const menus = [
  {
    id: 1,
    nama: 'Edit Profile',
    gambar: <Icon name={'user-edit'} size={30} color="black" />,
    halaman: 'EditProfile'
  },
  {
    id: 2,
    nama: 'Change Password',
    gambar: <Icon name={"lock"} size={30} color="black" />,
    halaman: 'ChangePassword'
  },
  {
    id: 3,
    nama: 'History Pemesanan',
    gambar: <Icon name={"history"} size={30} color="black" />,
    halaman: 'History'
  },
  {
    id: 4,
    nama: 'Sign Out',
    gambar: <Icon name={"sign-out-alt"} size={30} color="black" />,
    halaman: 'Login'
  },
];
