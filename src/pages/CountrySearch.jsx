import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';
import { Container, SearchForm, Section, CountryList } from 'components';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;

    fetchByRegion(region).then(data => setCountries(data));
  }, [searchParams]);

  const onSubmit = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList items={countries} />
      </Container>
    </Section>
  );
};
