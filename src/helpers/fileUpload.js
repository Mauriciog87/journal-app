export const fileUpload = async (file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dthaljq5k/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'journal-app');
    formData.append('file', file);

    try {
        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const cloudResponse = await response.json();

            return cloudResponse.secure_url;
        } else {
            return null;
        }
    } catch(error) {
        throw error;
    }
}   