import {
  addHubUserIcon,
  addStaffIcon,
  plusIcon,
  spaceManagementIcon,
} from "../../assets";
import H3 from "../../components/H3";
import P from "../../components/P";

const AdminHome = () => {
  return (
    <main className="bg-purple-500 flex flex-col gap-6">
      {/* quick actions section */}
      <div className="">
        <p className="font-semibold text-[13px]">Quick Actions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-1">
          {/* first action box */}
          <div className="w-full rounded-md bg-gray-200 flex justify-between items-center px-4 py-5">
            <div className="flex items-center gap-2">
              <img
                src={spaceManagementIcon}
                alt="space management icon"
                width={35}
                height={35}
              />

              <p className="text-[12px] font-semibold">Space Management</p>
            </div>
          </div>

          {/* second action box */}
          <div className="w-full rounded-md bg-gray-200 flex justify-between items-center px-4 py-5">
            <div className="flex items-center gap-2">
              <img
                src={addHubUserIcon}
                alt="space management icon"
                width={35}
                height={35}
              />

              <p className="text-[12px] font-semibold">Add Hub User</p>
            </div>

            <img src={plusIcon} alt="plus icon" width={20} />
          </div>

          {/* third action box */}
          <div className="w-full rounded-md bg-gray-200 flex justify-between items-center px-4 py-5">
            <div className="flex items-center gap-2">
              <img
                src={addStaffIcon}
                alt="space management icon"
                width={35}
                height={35}
              />

              <p className="text-[12px] font-semibold">Add Staff</p>
            </div>

            <img src={plusIcon} alt="plus icon" width={20} />
          </div>
        </div>
      </div>

      {/* stats section */}
      <div className="bg-yellow-500">
        <p className="font-semibold text-[13px]">Stats</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-1">
          {/* first stats box */}
          <div className="w-full rounded-md bg-white px-4 py-2">
            {/* top */}
            <div>
              <div>
                <H3>Net Position Today</H3>
                <P>Mon 14 October, 12:46 PM</P>
              </div>

              <img src="" alt="more info icon" />
            </div>

            {/* middle */}
            <div>
              <div>
                <div>
                  <p>53</p> <img src="" alt="increase icon" />
                </div>
                <P>checked in</P>
              </div>

              <div>
                <div>
                  <p>23</p> <img src="" alt="reducing icon" />
                </div>
                <P>checked out</P>
              </div>
            </div>

            {/* bottom */}
            <p>23 people are within the space</p>
          </div>
        </div>
      </div>

      {/* recent activities section */}
      <div className="bg-green-500">
        <p className="font-semibold text-[13px]">Recent Activities</p>
      </div>
    </main>
  );
};

export default AdminHome;
