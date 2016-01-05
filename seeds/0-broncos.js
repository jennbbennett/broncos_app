exports.seed = function(knex, Promise) {
  return knex('player').del().then(function() {
    return Promise.all([
      knex('player').insert({
        id: 1,
        first_name: 'John',
        last_name: 'Elway',
        position: 'QB',
        player_number: 7
      }),
      knex('player').insert({
        id: 2,
        first_name: 'Demaryius',
        last_name: 'Thomas',
        position: 'RB',
        player_number: 8
      }),
      knex('player').insert({
        id: 3,
        first_name: "Peyton",
        last_name: "Manning",
        position: "QB",
        player_number: 18
      }),
      knex('player').insert({
        id: 4,
        first_name: "Aqib",
        last_name: "Talib",
        position: "CB",
        player_number: 21
      }),
      knex('player').insert({
        id: 5,
        first_name: "Emmanuel",
        last_name: "Sanders",
        position: "WR",
        player_number: 10
      })
    ]);
  });
};
