import './App.css';
import { Form, Select, DatePicker, TimePicker, Input, Button } from 'antd';
import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;

const App = () => {
  const [form] = Form.useForm();
  const dateFormat = 'DD.MM.YYYY';

  const handleClear = () => {
    form.resetFields();
  };

  const handleSend = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(JSON.stringify(values));
      })
      .catch((info) => {
        console.log('Validation Failed:', info);
      });
  };

  const floors = Array.from({ length: 25 }, (_, i) => i + 3);
  const rooms = Array.from({ length: 10 }, (_, i) => i + 1);

  const disabledDate = (current) => {
    return current && current < moment().startOf('day');
  };

  return (
    <Form form={form} style={{ display: 'flex', flexDirection: 'column' }}>
      <Form.Item
        name="tower"
        rules={[{ required: true, message: 'Please select a tower' }]}
      >
        <Select placeholder="Select tower">
          <Option value="A">A</Option>
          <Option value="B">B</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="floor"
        rules={[{ required: true, message: 'Please select a floor' }]}
      >
        <Select placeholder="Select floor">
          {floors.map((floor) => (
            <Option key={floor} value={floor}>
              {floor}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="room"
        rules={[{ required: true, message: 'Please select a room' }]}
      >
        <Select placeholder="Select room">
          {rooms.map((room) => (
            <Option key={room} value={room}>
              {room}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="date"
        rules={[{ required: true, message: 'Select a date' }]}
      >
        <DatePicker disabledDate={disabledDate} format={dateFormat} />
      </Form.Item>
      <Form.Item
        name="time"
        rules={[{ required: true, message: 'Select a time' }]}
      >
        <TimePicker.RangePicker format="HH:mm" />
      </Form.Item>
      <Form.Item name="comments">
        <TextArea placeholder="Comments" />
      </Form.Item>
      <Form.Item>
        <Button onClick={handleClear} style={{ marginRight: '40px' }}>
          Clear
        </Button>
        <Button type="primary" onClick={handleSend}>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
