import PropTypes from 'prop-types';
import { FormWrapper, Form, Input } from './SearchMovie.styled';
export default function SearchMovie({ title, onChange, onSubmit }) {
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="title"
          autoComplete="off"
          value={title}
          onChange={onChange}
          autoFocus
        />
      </Form>
    </FormWrapper>
  );
}

SearchMovie.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
