import { previewClient } from '../../src/sanity';

export default async function updateLikes(req, res) {
  const { _id, increment } = JSON.parse(req.body);

  try {
    if (!increment) {
      await previewClient.patch(_id).dec({ likes: 1 }).commit();
    } else {
      await previewClient.patch(_id).inc({ likes: 1 }).commit();
    }
  } catch (err) {
    // console.error(err);
    return res.status(500).json({ message: `Couldn't update likes`, err });
  }

  return res.status(200).json({ message: 'Likes submitted' });
}
