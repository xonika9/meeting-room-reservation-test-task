import './App.css';
import { Form, Select, DatePicker, TimePicker, Input, Button } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const App = () => {
  const [form] = Form.useForm();

  const handleClear = () => {
    form.resetFields();
  };

  const handleSend = () => {
    console.log(JSON.stringify(form.getFieldsValue()));
  };

  const floors = Array.from({ length: 25 }, (_, i) => i + 3);
  const rooms = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <Form form={form}>
      <Form.Item name="tower">
        <Select placeholder="Select tower">
          <Option value="A">A</Option>
          <Option value="B">B</Option>
        </Select>
      </Form.Item>
      <Form.Item name="floor">
        <Select placeholder="Select floor">
          {floors.map((floor) => (
            <Option key={floor} value={floor}>
              {floor}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="room">
        <Select placeholder="Select room">
          {rooms.map((room) => (
            <Option key={room} value={room}>
              {room}
            </Option>
          ))}
        </Select>
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
        <Button type="primary" onClick={handleSend}>
          Send
        </Button>
        <Button onClick={handleClear}>Clear</Button>
      </Form.Item>
    </Form>
  );
};

export default App;
