export const SeasonActions = {
    SET_SEASONS: 'SET_SEASONS',
    // eslint-disable-next-line
    SELECT_SEASON: 'SELECT_SEASON',
    // eslint-disable-next-line
    EMPTY_SEASONS: 'EMPTY_SEASONS',
};

const seasonSlice = {
  emptySeasons: () => ({
    type: SeasonActions.EMPTY_SEASONS,
  }),
  selectSeason: (season) => ({
    payload: season,
    type: SeasonActions.SELECT_SEASON,
  }),
  setSeasons: (seasons) => ({
    payload: seasons,
    type: SeasonActions.SET_SEASONS,
  }),
};

export const { setSeasons, selectSeason, emptySeasons } = seasonSlice;
