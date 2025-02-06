import React, { useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
y
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

const CricketTrainingTracker = () => {
  const [isAddingSession, setIsAddingSession] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    skillType: '',
    drillName: '',
    duration: '',
    intensity: '',
    performance: '',
    notes: ''
  });

  const [tableData, setTableData] = useState([
    {
      id: 1,
      date: '2025-02-05',
      skillType: 'Batting',
      drillName: 'Front Foot Defense',
      duration: 30,
      intensity: 'High',
      performance: 85,
      notes: 'Improved footwork'
    },
    {
      id: 2,
      date: '2025-02-05',
      skillType: 'Bowling',
      drillName: 'Yorker Practice',
      duration: 45,
      intensity: 'Medium',
      performance: 78,
      notes: 'Better accuracy'
    }
  ]);

  const handleAddClick = () => {
    setIsAddingSession(true);
    setEditingId(null);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      skillType: '',
      drillName: '',
      duration: '',
      intensity: '',
      performance: '',
      notes: ''
    });
  };

  const handleEditClick = (session) => {
    setEditingId(session.id);
    setFormData(session);
    setIsAddingSession(false);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this session?')) {
      setTableData(tableData.filter(session => session.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setTableData(tableData.map(session =>
        session.id === editingId ? { ...formData, id: editingId } : session
      ));
      setEditingId(null);
    } else {
      setTableData([...tableData, { ...formData, id: Date.now() }]);
      setIsAddingSession(false);
    }
    setFormData({
      date: '',
      skillType: '',
      drillName: '',
      duration: '',
      intensity: '',
      performance: '',
      notes: ''
    });
  };

  const SessionForm = ({ onSubmit, data, onChange, onCancel }) => (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            value={data.date}
            onChange={e => onChange({ ...data, date: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Skill Type</label>
          <select
            value={data.skillType}
            onChange={e => onChange({ ...data, skillType: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          >
            <option value="">Select Skill</option>
            <option value="Batting">Batting</option>
            <option value="Bowling">Bowling</option>
            <option value="Fielding">Fielding</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Drill Name</label>
          <input
            type="text"
            value={data.drillName}
            onChange={e => onChange({ ...data, drillName: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (min)</label>
          <input
            type="number"
            value={data.duration}
            onChange={e => onChange({ ...data, duration: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Intensity</label>
          <select
            value={data.intensity}
            onChange={e => onChange({ ...data, intensity: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          >
            <option value="">Select Intensity</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Performance (%)</label>
          <input
            type="number"
            value={data.performance}
            onChange={e => onChange({ ...data, performance: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
            min="0"
            max="100"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            value={data.notes}
            onChange={e => onChange({ ...data, notes: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            rows="3"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {editingId ? 'Update Session' : 'Add Session'}
        </button>
      </div>
    </form>
  );

  const ProcessTracker = () => (
    <div className="grid grid-cols-5 gap-4 mb-6">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="relative">
          <div className="h-2 bg-gray-200 rounded">
            <div 
              className="h-full bg-blue-600 rounded transition-all duration-500"
              style={{ width: `${Math.random() * 100}%` }}
            />
          </div>
          <span className="absolute -top-6 text-sm">Field {step}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Cricket Training Progress</h1>
      
      <ProcessTracker />

      <Card className="mt-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Training Sessions Log</CardTitle>
          <button 
            onClick={handleAddClick}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus size={18} />
            Add Session
          </button>
        </CardHeader>
        <CardContent>
          {(isAddingSession || editingId) && (
            <div className="mb-6">
              <SessionForm
                onSubmit={handleSubmit}
                data={formData}
                onChange={setFormData}
                onCancel={() => {
                  setIsAddingSession(false);
                  setEditingId(null);
                }}
              />
            </div>
          )}
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Skill Type</th>
                  <th className="px-6 py-3">Drill Name</th>
                  <th className="px-6 py-3">Duration (min)</th>
                  <th className="px-6 py-3">Intensity</th>
                  <th className="px-6 py-3">Performance</th>
                  <th className="px-6 py-3">Notes</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((session) => (
                  <tr key={session.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{session.date}</td>
                    <td className="px-6 py-4">{session.skillType}</td>
                    <td className="px-6 py-4">{session.drillName}</td>
                    <td className="px-6 py-4">{session.duration}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium
                        ${session.intensity === 'High' ? 'bg-red-100 text-red-800' : 
                          session.intensity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'}`}>
                        {session.intensity}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="mr-2">{session.performance}%</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${session.performance}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{session.notes}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEditClick(session)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDeleteClick(session.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CricketTrainingTracker;