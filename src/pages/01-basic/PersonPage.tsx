import { WhiteCard } from "../../components";
import { usePersonStore } from "../../layouts/stores";

export const PersonPage = () => {
  const fistName = usePersonStore((state) => state.fistName);
  const lastName = usePersonStore((state) => state.lastName);
  const setFistName = usePersonStore((state) => state.setFistName);
  const setLastName = usePersonStore((state) => state.setLastName);

  return (
    <>
      <h1>Persona</h1>
      <p>
        Información que se compartirá a otro store, Session Storage y Firebase
      </p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={fistName}
                    onChange={(e) => setFistName(e.target.value)}
                    placeholder="Primer Nombre"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <pre className="bg-gray-200 p-5 rounded-[20px]">
              {JSON.stringify(
                {
                  fistName,
                  lastName,
                },
                null,
                2,
              )}
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};
