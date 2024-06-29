import Form from '../../components/Form';
import Layout from '../../components/Layout';
import Title from '../../components/Title';

export function LoginForm() {
  return (
    <Layout>
      <Title title='Without Child' />
      <Title title='With Child'>hi</Title>

      <div>
        <Form />
      </div>
    </Layout>
  );
}
