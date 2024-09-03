import { useState } from 'react';

const data = [
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, salary: "$162,700" },
    { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, salary: "$1,200,000" },
    { name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28, salary: "$357,650" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, salary: "$206,850" },
    { name: "Fiona Green", position: "Chief Operating Officer (COO)", office: "San Francisco", age: 48, salary: "$850,000" },
    { name: "Shad Decker", position: "Regional Director", office: "Edinburgh", age: 51, salary: "$183,000" },
    { name: "Paul McCoy", position: "Financial Analyst", office: "Edinburgh", age: 38, salary: "$245,000" },
    { name: "Miriam English", position: "Marketing Designer", office: "Tokyo", age: 36, salary: "$130,000" },
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, salary: "$162,700" },
    { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, salary: "$1,200,000" },
    { name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28, salary: "$357,650" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, salary: "$206,850" },
    { name: "Fiona Green", position: "Chief Operating Officer (COO)", office: "San Francisco", age: 48, salary: "$850,000" },
    { name: "Shad Decker", position: "Regional Director", office: "Edinburgh", age: 51, salary: "$183,000" },
    { name: "Paul McCoy", position: "Financial Analyst", office: "Edinburgh", age: 38, salary: "$245,000" },
    { name: "Miriam English", position: "Marketing Designer", office: "Tokyo", age: 36, salary: "$130,000" }, { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, salary: "$162,700" },
    { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, salary: "$1,200,000" },
    { name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28, salary: "$357,650" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, salary: "$206,850" },
    { name: "Fiona Green", position: "Chief Operating Officer (COO)", office: "San Francisco", age: 48, salary: "$850,000" },
    { name: "Shad Decker", position: "Regional Director", office: "Edinburgh", age: 51, salary: "$183,000" },
    { name: "Paul McCoy", position: "Financial Analyst", office: "Edinburgh", age: 38, salary: "$245,000" },
    { name: "Miriam English", position: "Marketing Designer", office: "Tokyo", age: 36, salary: "$130,000" },
    
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, salary: "$162,700" },
    { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, salary: "$1,200,000" },
    { name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28, salary: "$357,650" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, salary: "$206,850" },
    { name: "Fiona Green", position: "Chief Operating Officer (COO)", office: "San Francisco", age: 48, salary: "$850,000" },
    { name: "Shad Decker", position: "Regional Director", office: "Edinburgh", age: 51, salary: "$183,000" },
    { name: "Paul McCoy", position: "Financial Analyst", office: "Edinburgh", age: 38, salary: "$245,000" },
    { name: "Miriam English", position: "Marketing Designer", office: "Tokyo", age: 36, salary: "$130,000" },
    { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, salary: "$162,700" },
    { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, salary: "$1,200,000" },
    { name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28, salary: "$357,650" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, salary: "$206,850" },
    { name: "Fiona Green", position: "Chief Operating Officer (COO)", office: "San Francisco", age: 48, salary: "$850,000" },
    { name: "Shad Decker", position: "Regional Director", office: "Edinburgh", age: 51, salary: "$183,000" },
    { name: "Paul McCoy", position: "Financial Analyst", office: "Edinburgh", age: 38, salary: "$245,000" },
    { name: "Miriam English", position: "Marketing Designer", office: "Tokyo", age: 36, salary: "$130,000" }, { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, salary: "$433,060" },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, salary: "$162,700" },
    { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: 47, salary: "$1,200,000" },
    { name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: 28, salary: "$357,650" },
    { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: 28, salary: "$206,850" },
    { name: "Fiona Green", position: "Chief Operating Officer (COO)", office: "San Francisco", age: 48, salary: "$850,000" },
    { name: "Shad Decker", position: "Regional Director", office: "Edinburgh", age: 51, salary: "$183,000" },
    { name: "Paul McCoy", position: "Financial Analyst", office: "Edinburgh", age: 38, salary: "$245,000" },
    { name: "Miriam English", position: "Marketing Designer", office: "Tokyo", age: 36, salary: "$130,000" },
];

const Tables = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [action, setAction] = useState('');

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleActionChange = (item, action) => {
        switch (action) {
            case 'edit':
                alert(`Editing ${item.name}`);
                break;
            case 'delete':
                if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
                    alert(`${item.name} deleted`);
                }
                break;
            case 'details':
                alert(`Details of ${item.name}: \nPosition: ${item.position}\nOffice: ${item.office}\nAge: ${item.age}\nSalary: ${item.salary}`);
                break;
            default:
                break;
        }
    };

    return (
        <div className="p-5 bg-white rounded-lg">
            <input
                type="text"
                placeholder="Search here..."
                className="w-full p-2 mb-5 border border-gray-300 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead className="bg-gray-200 sticky top-0">
                        <tr>
                            {["Name", "Position", "Office", "Age", "Salary", "Actions"].map((header, index) => (
                                <th key={index} className="p-2 text-left border border-gray-300">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="p-2 border border-gray-300">{item.name}</td>
                                <td className="p-2 border border-gray-300">{item.position}</td>
                                <td className="p-2 border border-gray-300">{item.office}</td>
                                <td className="p-2 border border-gray-300">{item.age}</td>
                                <td className="p-2 border border-gray-300">{item.salary}</td>
                                <td className="p-2 border border-gray-300">
                                    <select
                                        value={action}
                                        onChange={(e) => {
                                            const selectedAction = e.target.value;
                                            setAction(selectedAction);
                                            handleActionChange(item, selectedAction);
                                        }}
                                        className="border border-gray-300 rounded p-1"
                                    >
                                        <option value="">Select Action</option>
                                        <option value="edit">Edit</option>
                                        <option value="delete">Delete</option>
                                        <option value="details">Details</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row justify-between items-center">
                <span>
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries
                </span>
                <div className="mt-2 sm:mt-0 flex items-center">
                    <select
                        className="ml-2 border border-gray-300 rounded p-1"
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                    >
                        <option value="5">Per Page: 05</option>
                        <option value="10">Per Page: 10</option>
                        <option value="12">Per Page: 12</option>
                    </select>
                    <div className="flex space-x-2 ml-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                className={`border text-blue-500 border-blue-500 bg-white px-2 py-1 rounded hover:bg-blue-500 hover:text-white ${currentPage === i + 1 ? 'bg-blue-500 : text-blue-500' : ''}`}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tables;