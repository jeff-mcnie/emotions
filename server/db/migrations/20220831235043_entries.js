/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('entries', (table) => {
    table.increments('id')
    table.string('song_link')
    table.string('song_text')
    table.boolean('has_image')
    table.string('image')
    table.string('image_text')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('entries')
  
};
