/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('entries').del()
  await knex('entries').insert([
    {id: 1, song_link: 'https://open.spotify.com/track/5OomSPKKwQqazfzzDZ7pa4', song_text: 'A song about the feeling of being on drugs.', has_image: false, image: '', image_text: ''},
    {id: 2, song_link: 'https://open.spotify.com/track/1ZytCsxWr7noalDWNHcB7D', song_text: 'Makes me feel energetic towards life.', has_image: true, image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-happiness-vesna-delevska.jpg', image_text: 'Happiness and energy'},
    {id: 3, song_link: 'https://open.spotify.com/track/4byMDCeoUcg9Zph9CzJjPI', song_text: 'Chaotic energy.', has_image: false, image: '', image_text: ''},
    {id: 4, song_link: 'https://open.spotify.com/track/7rfIaXVwpHiyUcUmsag4XN', song_text: 'In memory of one of the best to ever live!', has_image: true, image: 'https://i.pinimg.com/564x/b3/84/7a/b3847a39dd8d4615807f6ed70615a2d2--lavender-roses-purple-roses.jpg', image_text: 'Makes me think of beauty and softness'},
  ]);
};
