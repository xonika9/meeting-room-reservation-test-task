import './App.css';
import { Form, Select, DatePicker, TimePicker, Input, Button } from 'antd';

const { TextArea } = Input;

const App = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item name="tower">
        <Select placeholder="Select tower"></Select>
      </Form.Item>
      <Form.Item name="floor">
        <Select placeholder="Select floor"></Select>
      </Form.Item>
      <Form.Item name="room">
        <Select placeholder="Select room"></Select>
      </Form.Item>
      <Form.Item name="date">
        <DatePicker />
      </Form.Item>
      <Form.Item name="time">
        <TimePicker.RangePicker format="HH:mm" />
      </Form.Item>
      <Form.Item name="comments">
        <TextArea placeholder="Comments" />
      </Form.Item>
      <Form.Item>
        <Button>Send</Button>
        <Button>Clear</Button>
      </Form.Item>
    </Form>
  );
};

export default App;
