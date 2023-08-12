import { useState, useEffect } from "react";
import {
  BsPlusSquare,
  BsTrash,
  BsSearch,
  BsPencilSquare,
} from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

import { toast } from "react-toastify";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import moment from 'moment';
import { useAddEventMutation, useGetApprovedEventsQuery, useUpdateEventMutation } from "../services/eventApi";
import { useGetCategoriesQuery } from "../services/categoryApi";
import { useGetServicesQuery } from "../services/servicesApi";
import { useGetclientsQuery } from "../services/clientApi";

const TABLE_HEAD = ["Service Type", "Phone", "Actions"];

const EventApproved = () => {
  const [open, setOpen] = useState(false);
  const [viewData, setViewData] = useState();
  const [Viewopen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    status: "",
    address: "",
    description: "",
    serviceId: "",
    categoryId: "",
    clientId: "",
  });

  const [eventId, setEventid] = useState();

  const {
    startDate,
    endDate,
    status,
    address,
    description,
    serviceId,
    categoryId,
    clientId,
  } = formData;

  const handleViewOpen = () => setViewOpen(!Viewopen);

  const handleOpen = () => setOpen(!open);
  const handleEdit = () => setEditOpen(!editOpen);

  const user = JSON.parse(localStorage.getItem("user"));

  // api services
  const { data, isLoading } = useGetApprovedEventsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const { data: services } = useGetServicesQuery();
  const { data: clients } = useGetclientsQuery();
  const [addEvent] = useAddEventMutation();
  const [updateEvent] = useUpdateEventMutation();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const EditOnChange = (e) => {
    setViewData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };



  useEffect(() => {}, [data, categories, services, clients]);

  const viewDetails = (id) => {
    let eProfile =
      data &&
      data.find((item) => {
        return item?._id === id;
      });
    handleViewOpen();
    setViewData(eProfile);
    setEventid(eProfile?._id);
  };

  const EditDetails = (id) => {
    let eProfile =
      data &&
      data.find((item) => {
        return item?._id === id;
      });
    handleEdit();
    setViewData(eProfile);
    setEventid(eProfile?._id);
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = user.token;
      const formData = {
        startDate: startDate,
        endDate: endDate,
        status: status,
        address: address,
        description: description,
        serviceId: serviceId,
        categoryId: categoryId,
        clientId: clientId,
      };
      await addEvent({ token, formData }).unwrap();
      toast.success("Event booked successfully");
      setFormData({
        startDate: "",
        endDate: "",
        status: "",
        address: "",
        description: "",
        serviceId: "",
        categoryId: "",
        clientId: "",
      });
    } catch (error) {
      toast.error(error.data.msg);
      //   alert(error.data)
    }
  };


  const EditOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = user.token;
      const formData = {
        startDate: viewData?.startDate,
        endDate: viewData?.endDate,
        status: viewData?.status,
        address: viewData?.address,
        description: viewData?.description,
        serviceId: viewData?.serviceId,
        categoryId: viewData?.categoryId,
        clientId: viewData?.clientId,
        id:eventId
      };

      await updateEvent({ token, formData }).unwrap();
      toast.success("Event Updated successfully");
      setFormData({
        startDate: "",
        endDate: "",
        status: "",
        address: "",
        description: "",
        serviceId: "",
        categoryId: "",
        clientId: "",
      });
      handleEdit();
    } catch (error) {
      toast.error(error.data.msg);
      //   alert(error.data)
    }
  };

  return (
    <div className="bg-[#EDF0F5] h-[100vh] px-5 py-5">
      {/*Booking Event model  */}
      <Dialog open={open} handler={handleOpen} className="" size="xl">
        <div className="">
          <DialogHeader className="text-[#489EE7]">
            Event Booking Form
          </DialogHeader>
          {/* <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} /> */}
        </div>
        <DialogBody className="">
          <form onSubmit={OnSubmit}>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 mt-2">
              <div className="flex flex-col space-y-2">
                <label>Client Name</label>
                {clients || !isLoading ? (
                  <select
                    className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                    name="clientId"
                    value={clientId}
                    id="department"
                    onChange={onChange}
                  >
                    {clients?.map((client) => (
                      <option key={client?._id} value={client?._id}>
                        {client?.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Loading</p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label>Service Type</label>
                {services || !isLoading ? (
                  <select
                    className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                    name="serviceId"
                    value={serviceId}
                    id="serviceId"
                    onChange={onChange}
                  >
                    {services?.map((service) => (
                      <option key={service?._id} value={service?._id}>
                        {service?.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Loading</p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label>Category</label>
                {categories || !isLoading ? (
                  <select
                    onChange={onChange}
                    className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                    name="categoryId"
                    value={categoryId}
                    id="categoryId"
                  >
                    {categories?.map((category) => (
                      <option key={category?._id} value={category?._id}>
                        {category?.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <label>Start Date</label>
                <input
                  value={startDate}
                  name="startDate"
                  type="Date"
                  onChange={onChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>End Date</label>
                <input
                  value={endDate}
                  name="endDate"
                  type="Date"
                  onChange={onChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Address</label>
                <input
                  value={address}
                  name="address"
                  type="text"
                  onChange={onChange}
                  placeholder="Address"
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Status</label>
                <select
                  onChange={onChange}
                  className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                  name="status"
                  value={status}
                  id="status"
                >
                  <option value="Booked">Booked</option>
                  <option value="Approved">Approved</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label>Short description</label>
                <textarea
                  value={description}
                  name="description"
                  onChange={onChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                  placeholder="Short Description"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button
                variant="gradient"
                type="submit"
                size="lg"
                className="bg-[#489EE7]"
              >
                send message
              </Button>
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>

      {/*Edit  Booking model  */}
      <Dialog open={editOpen} handler={handleEdit} className="" size="xl">
        <div className="">
          <DialogHeader className="text-[#489EE7]">
            Edit Booking Form
          </DialogHeader>
          {/* <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} /> */}
        </div>
        <DialogBody className="">
          <form onSubmit={EditOnSubmit}>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 mt-2">
              <div className="flex flex-col space-y-2">
                <label>Client Name</label>
                {clients || !isLoading ? (
                  <select
                    className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                    name="clientId"
                    value={viewData?.clientId?.name}
                    id="department"
                    onChange={EditOnChange}
                  >
                    {clients?.map((client) => (
                      <option key={client?._id} value={client?._id}>
                        {client?.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Loading</p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label>Service Type</label>
                {services || !isLoading ? (
                  <select
                    className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                    name="serviceId"
                    value={viewData?.serviceId?.name}
                    id="serviceId"
                    onChange={EditOnChange}
                  >
                    {services?.map((service) => (
                      <option key={service?._id} value={service?._id}>
                        {service?.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Loading</p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label>Category</label>
                {categories || !isLoading ? (
                  <select
                    onChange={EditOnChange}
                    className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                    name="categoryId"
                    value={viewData?.categoryId?.name}
                    id="categoryId"
                  >
                    {categories?.map((category) => (
                      <option key={category?._id} value={category?._id}>
                        {category?.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <label>Start Date</label>
                <input
                  value={moment(new Date(viewData?.startDate)).format("YYYY-MM-DD")}
                  name="startDate"
                  type="Date"
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>End Date</label>
                <input
                  value={moment(new Date(viewData?.endDate)).format("YYYY-MM-DD")}
                  name="endDate"
                  type="Date"
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Address</label>
                <input
                  value={viewData?.address}
                  name="address"
                  type="text"
                  onChange={EditOnChange}
                  placeholder="Address"
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Status</label>
                <select
                  onChange={EditOnChange}
                  className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                  name="status"
                  value={viewData?.status}
                  id="status"
                >
                  <option value="Booked">Booked</option>
                  <option value="Approved">Approved</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label>Short description</label>
                <textarea
                  value={viewData?.description}
                  name="description"
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                  placeholder="Short Description"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button
                variant="gradient"
                type="submit"
                size="lg"
                className="bg-[#489EE7]"
              >
                Update Booking
              </Button>
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red"  onClick={handleEdit}>
            close
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Booking view Model */}
      <Dialog open={Viewopen} handler={handleViewOpen} size="xl">
        <DialogHeader>View Event Booking</DialogHeader>
        <DialogBody divider className="p-10">
          <div className="table-horizontal-container">
            <table className="unfixed-table w-full mb-10">
              <tbody>
                <tr>
                  <th>Client Name</th>
                  <td>{viewData?.clientId?.name}</td>
                  <th className="">Phone</th>
                  <td className="">{viewData?.clientId?.phone}</td>
                </tr>

                <tr>
                  <th>Mobile</th>
                  <td>{viewData?.clientId?.mobile}</td>
                  <th>Service Type</th>
                  <td>{viewData?.serviceId?.name}</td>
                </tr>

                <tr>
                  <th>Category</th>
                  <td>{viewData?.categoryId?.name}</td>
                  <th>Created</th>
                  <td>2023</td>
                </tr>

                <tr>
                  <th>Start Date</th>
                  <td>{moment(new Date(viewData?.startDate)).format("YYYY-MM-DD")}</td>
                  <th>End Date</th>
                  <td>{moment(new Date(viewData?.endDate)).format("YYYY-MM-DD")}</td>
                </tr>

                <tr>
                <th>Address</th>
                  <td>{viewData?.address}</td>
                  <th>Status</th>
                  <td>{viewData?.status}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{viewData?.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DialogBody>
      </Dialog>

      {/* Table */}
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-20 md:mb-10">
            <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <Typography variant="h5" className="text-[#489EE7]">
                Event Approved List
              </Typography>

              <Button
                className="flex items-center gap-3 bg-[#489EE7] rounded-sm justify-center"
                size="sm"
                onClick={handleOpen}
              >
                <BsPlusSquare className="h-7 w-7" />
                Book Event
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          {data || !isLoading ? (
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => {
                  const isLast = item?._id === data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr key={item?._id}>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item?.serviceId?.name}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item?.clientId?.phone}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex space-x-2">
                          <AiOutlineEye
                            className="h-5 w-5 cursor-pointer hover:text-amber-300"
                            onClick={() => viewDetails(item?._id)}
                          />
                          <BsPencilSquare
                            className="h-5 w-5 cursor-pointer hover:text-amber-300"
                            onClick={() => EditDetails(item?._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>Loading...</p>
          )}
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventApproved;
