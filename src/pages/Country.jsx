import { Section, Container, CountryInfo, GoBackBtn } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState({});
  const location = useLocation();

  useEffect(() => {
    const oneCountry = async () => {
      const data = await fetchCountry(countryId);
      setCountry(data);
    };

    oneCountry();
  }, [countryId]);

  const backLink = location.state?.from ?? '/';
  console.log(backLink);

  return (
    <Section>
      <Container>
        <GoBackBtn path={backLink}>Back</GoBackBtn>
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
