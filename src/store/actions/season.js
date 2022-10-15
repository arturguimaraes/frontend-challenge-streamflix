export const SeasonActions = {
    SET_SEASONS: 'SET_SEASONS',
    // eslint-disable-next-line
    SELECT_SEASON: 'SELECT_SEASON',
    // eslint-disable-next-line
    EMPTY_SEASONS: 'EMPTY_SEASONS',
};

const seasonSlice = {
    setSeasons: (seasons, episodes) => ({
      type: SeasonActions.SET_SEASONS,
      // eslint-disable-next-line
      payload: {
        seasons,
        // eslint-disable-next-line
        episodes,
      }
    }),
    // eslint-disable-next-line
    selectSeason: (season) => ({
      type: SeasonActions.SELECT_SEASON,
      // eslint-disable-next-line
      payload: season,
    }),
    // eslint-disable-next-line
    emptySeasons: () => ({
      type: SeasonActions.EMPTY_SEASONS,
    })
};

export const { setSeasons, selectSeason, emptySeasons } = seasonSlice;
