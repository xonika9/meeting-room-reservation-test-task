import './App.css';
import { Form, Select, DatePicker, TimePicker, Input, Button } from 'antd';
import moment from 'moment';
import { dateFormat, floors, rooms, requiredMessage } from './config';

const { Option } = Select;
const { TextArea } = Input;

const App = () => {
  const [form] = Form.useForm();

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

  const disabledDate = (current) => {
    return current && current < moment().startOf('day');
  };

  return (
    <Form form={form} style={{ display: 'flex', flexDirection: 'column' }}>
      <Form.Item
        name="tower"
        rules={[{ required: true, message: requiredMessage }]}
      >
        <Select placeholder="Select tower">
          <Option value="A">A</Option>
          <Option value="B">B</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="floor"
        rules={[{ required: true, message: requiredMessage }]}
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
        rules={[{ required: true, message: requiredMessage }]}
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
        rules={[{ required: true, message: requiredMessage }]}
      >
        <DatePicker disabledDate={disabledDate} format={dateFormat} />
      </Form.Item>
      <Form.Item
        name="time"
        rules={[{ required: true, message: requiredMessage }]}
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
