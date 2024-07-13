import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Alejandro Navarini | Software Engineer',
    short_name: 'Alejandro Navarini',
    description: 'Alejandro Navarini',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#EDE8E4',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
