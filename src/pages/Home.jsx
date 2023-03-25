import { Container, CountryList, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getEuropeCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    getEuropeCountries();
  });

  return (
    <Section>
      <Container>
        <CountryList items={countries} />
      </Container>
    </Section>
  );
};
