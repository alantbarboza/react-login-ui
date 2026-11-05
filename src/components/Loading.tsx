type PropsLoading = {
    isLoading: boolean;
}

export function Loading({isLoading}: PropsLoading) {
  return (
    <div>
        {isLoading && <h1 style={{color: "white"}}>Loading...</h1>}
    </div>
  )
}