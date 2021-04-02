import cloudinary from 'cloudinary';

import { fileUpload } from '../../helpers/fileUpload';


cloudinary.config({ 
    cloud_name: 'dthaljq5k', 
    api_key: '428338528636275', 
    api_secret: 'NED7Pz1OuseK-mh4uUYl1dr05wY' 
  });

describe('Test on fileUpload', () => {
    test('should load a file and return an url', async() => {
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();
        const file = new File([blob], 'image.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length-1].replace('.png', '');
        const {deleted} = await cloudinary.v2.api.delete_resources(imageId);
        
        expect(deleted).toEqual({[imageId]: "deleted"});
    });

    test('should return an error', async () => {
        const file = new File([], 'image.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});