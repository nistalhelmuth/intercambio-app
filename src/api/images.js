import AWS from 'aws-sdk';

export const uploadUserImage = (id, img) => {
  AWS.config.update({
    region: 'us-east-1',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:8fff880a-75d5-4952-8fbb-926f84c11408',
    }),
  });

  const s3 = new AWS.S3({ params: { Bucket: 'bartering-images' } });

  return new Promise((resolve, reject) => {
    s3.upload({
      Key: `users/${id}.jpg`,
      Body: img,
      ACL: 'public-read-write',
    }, (err, data) => {
      if (err == null) {
        const imgUrl = data.Location;
        resolve(imgUrl);
      } else {
        reject(err);
      }
    });
  });
};
