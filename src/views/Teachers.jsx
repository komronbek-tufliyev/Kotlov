import AcademicTeacher from "../components/teachers/AcademicTeacher";
import MaleAndFemale from "../components/teachers/MaleAndFemale";
import ManagementStaff from "../components/teachers/ManagementStaff";
import TeacherPosition from "../components/teachers/TeacherPosition";

const Teachers = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-3">
          <TeacherPosition />
          <MaleAndFemale />
          <ManagementStaff />
        </div>
          <AcademicTeacher />
      </div>
    </>
  );
};

export default Teachers;
