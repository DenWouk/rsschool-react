import { useAppSelector } from '../../store/hooks';

export function CountriesList() {
  const countries = useAppSelector((store) => store.countries);

  return (
    <datalist id="countries">
      {countries.countries.map((el, i) => {
        return <option key={i} value={el} />;
      })}
    </datalist>
  );
}
